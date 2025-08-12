// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* === Tokens (cores, espaços, raio) === */
  :root{
    --bg-0:#0b0c0d;        /* fundo da página */
    --bg-1:#0f1012;        /* fundo de cards */
    --stroke:#222428;      /* linhas/bordas */
    --text-1:#f2f2f3;      /* texto principal */
    --text-2:#a0a3a8;      /* texto secundário */
    --brand:#00d4aa;       /* cor destaque */
    --brand-600:#00b899;   /* brand mais escura */
    --radius:14px;         /* raio padrão */
    --space-2:8px;         /* baseline 8px */
    --space-3:12px;
    --space-4:16px;
    --space-5:20px;
    --space-6:24px;
    --shadow-1:0 1px 0 rgba(255,255,255,.04) inset, 0 1px 8px rgba(0,0,0,.35);
    --shadow-focus:0 0 0 3px rgba(0,212,170,.25);
  }

  /* Reset/qualidade de renderização */
  *,*::before,*::after{ box-sizing: border-box; }
  html{ font-family:"Inter", system-ui, sans-serif; -webkit-font-smoothing:antialiased; }
  body{ margin:0; background:var(--bg-0); color:var(--text-1); }

  /* Acessibilidade: só mostra focus quando é teclado */
  :focus:not(:focus-visible){ outline: none; }
  :focus-visible{ outline: none; box-shadow: var(--shadow-focus); border-radius: 8px; }
`;
