import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const symbols = "$#%^&*@()_+-=[]{}|;:,.<>?/\\~";
    const fontSize = 16;
    let width, height, columns, drops;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      // fade background slowly (trail effect)
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(34, 197, 94, 0.55)"; // green
      ctx.font = `${fontSize}px JetBrains Mono`;

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // reset randomly to keep it natural
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

return (
  <canvas
    ref={canvasRef}
    className="fixed inset-0 z-0 pointer-events-none opacity-70"
  />
);

}
