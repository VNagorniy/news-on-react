import { ThemeProvider } from '@/app/providers/ThemeProvider';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './appStore';
import BaseLayout from './layouts/BaseLayout';
import '@/shared/index.css';

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BaseLayout />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
