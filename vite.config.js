import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tranzzo/',
})
```

Потім відкрий `package.json` в тій самій папці і знайди рядок:
```
"scripts": {
```

Додай одразу після `{` новий рядок:
```
"homepage": "https://brandsprint.theseeds.is/tranzzo",
```

І в секцію `scripts` додай:
```
"deploy": "gh-pages -d dist",
"predeploy": "vite build",