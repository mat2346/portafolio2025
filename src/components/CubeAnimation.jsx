/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

const CubeAnimation = () => {
  const canvasRef = useRef(null);

  // Variables globales
  let A = 0, B = 0, C = 0;
  const cubeWidth = 20; // Tamaño del cubo
  const width = 160, height = 44; // Resolución del buffer
  const zBuffer = new Float32Array(width * height);
  const buffer = new Array(width * height);
  const distanceFromCam = 100;
  const K1 = 40; // Factor de proyección
  const incrementSpeed = 0.6;
  const horizontalOffset = 0;
  const verticalOffset = 5; // Ajuste vertical para centrar el cubo

  // Nuevas variables para ajustar la posición del cubo
  const positionX = 0; // Desplazamiento en X
  const positionY = -7; // Desplazamiento en Y

  // Definir el tamaño de los caracteres
  const charWidth = 8;  // Ancho estimado por carácter (fuente monospace 14px)
  const charHeight = 16; // Alto estimado por carácter (fuente monospace 14px)

  // Funciones de cálculo
  const calculateX = (i, j, k) => {
    return (
      j * Math.sin(A) * Math.sin(B) * Math.cos(C) -
      k * Math.cos(A) * Math.sin(B) * Math.cos(C) +
      j * Math.cos(A) * Math.sin(C) +
      k * Math.sin(A) * Math.sin(C) +
      i * Math.cos(B) * Math.cos(C)
    );
  };

  const calculateY = (i, j, k) => {
    return (
      j * Math.cos(A) * Math.cos(C) +
      k * Math.sin(A) * Math.cos(C) -
      j * Math.sin(A) * Math.sin(B) * Math.sin(C) +
      k * Math.cos(A) * Math.sin(B) * Math.sin(C) -
      i * Math.cos(B) * Math.sin(C)
    );
  };

  const calculateZ = (i, j, k) => {
    return k * Math.cos(A) * Math.cos(B) - j * Math.sin(A) * Math.cos(B) + i * Math.sin(B);
  };

  const calculateForSurface = (cubeX, cubeY, cubeZ, ch, ctx) => {
    const x = calculateX(cubeX, cubeY, cubeZ);
    const y = calculateY(cubeX, cubeY, cubeZ);
    const z = calculateZ(cubeX, cubeY, cubeZ) + distanceFromCam;

    const ooz = 1 / z;
    const xp = Math.floor(width / 2 + horizontalOffset + positionX + K1 * ooz * x * 2);
    const yp = Math.floor(height / 2 + verticalOffset + positionY + K1 * ooz * y);

    const idx = xp + yp * width;
    if (idx >= 0 && idx < width * height) {
      if (ooz > zBuffer[idx]) {
        zBuffer[idx] = ooz;
        buffer[idx] = ch;
        ctx.fillStyle = 'white';
        ctx.font = '14px monospace';
        ctx.fillText(ch, xp * charWidth, yp * charHeight);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Establecer el tamaño del canvas basado en el tamaño de los caracteres
    canvas.width = (width * charWidth) - 20;  // 160 * 8 = 1280px
    canvas.height = (height * charHeight) - 50; // 44 * 16 = 704px

    const render = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      zBuffer.fill(0);
      buffer.fill(' ');

      const characters = ['@', '$', '~', '#', ';', '+'];
      for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
        for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
          calculateForSurface(cubeX, cubeY, -cubeWidth, characters[0], ctx);
          calculateForSurface(cubeWidth, cubeY, cubeX, characters[1], ctx);
          calculateForSurface(-cubeWidth, cubeY, -cubeX, characters[2], ctx);
          calculateForSurface(-cubeX, cubeY, cubeWidth, characters[3], ctx);
          calculateForSurface(cubeX, -cubeWidth, -cubeY, characters[4], ctx);
          calculateForSurface(cubeX, cubeWidth, cubeY, characters[5], ctx);
        }
      }

      // Incrementos reducidos para una animación más lenta
      A += 0.025; // Reducido de 0.05
      B += 0.025; // Reducido de 0.05
      C += 0.005; // Reducido de 0.01

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: '#000' }}>
      <canvas
        ref={canvasRef}
        style={{ border: '15px solid white', marginTop: '-60px' }}
      />
    </div>
  );
};

export default CubeAnimation;