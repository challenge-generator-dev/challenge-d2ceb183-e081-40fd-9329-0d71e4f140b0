import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

const initializeApp = async (): Promise<void> => {
  console.log('Inicializando aplicación de gestión de productos...');
  
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('No se encontró el elemento root en el DOM');
  }
  
  console.log('Aplicación lista para renderizar');
};

initializeApp().catch(error => {
  console.error('Error al inicializar la aplicación:', error);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}