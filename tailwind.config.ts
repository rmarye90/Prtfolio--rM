// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  theme: {
      fontFamily: {
        poppins: ["poppins"],
        afterSmile: ["AfterSmile"],
        parkinsans: ["Parkinsans"],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
    },
  },
};
