// Simple toast hook and provider adapted for shadcn/ui pattern
"use client";
import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts((t) => t.filter((toast) => toast.id !== id));
  }, []);

  const toast = useCallback(
    (opts) => {
      const id = Math.random().toString(36).slice(2);
      const data = { id, duration: 4000, ...opts };
      setToasts((t) => [...t, data]);
      if (data.duration !== Infinity) {
        setTimeout(() => remove(id), data.duration);
      }
      return id;
    },
    [remove]
  );

  return (
    <ToastContext.Provider value={{ toast, remove }}>
      {children}
      <div className="fixed inset-x-0 top-2 z-50 flex flex-col items-center gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto w-full max-w-sm rounded-md border bg-background/90 backdrop-blur p-4 shadow-md flex flex-col gap-1 text-sm"
          >
            {t.title && <div className="font-medium">{t.title}</div>}
            {t.description && (
              <div className="text-muted-foreground text-xs leading-snug">
                {t.description}
              </div>
            )}
            {t.action && <div className="mt-2">{t.action}</div>}
            <button
              onClick={() => remove(t.id)}
              className="absolute top-1 right-1 inline-flex h-6 w-6 items-center justify-center rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-accent"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}
