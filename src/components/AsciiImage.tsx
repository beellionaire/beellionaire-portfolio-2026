import { useEffect, useState } from "react";

interface AsciiImageProps {
  src: string;
  charWidth?: number; // How many characters wide the ASCII art should be
  color?: string;
}

// Characters arranged from darkest (space) to lightest (heavy symbols)
const DENSITY_CHARS =
  " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

const AsciiImage = ({
  src,
  charWidth = 100,
  color = "#ff5a36",
}: AsciiImageProps) => {
  const [asciiArt, setAsciiArt] = useState<string>("");

  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = src;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Font characters are typically taller than they are wide.
      // We multiply the height by ~0.5 to correct the aspect ratio so the image doesn't stretch vertically.
      const aspectCorrection = 0.5;
      const width = charWidth;
      const height = Math.floor(
        (image.height / image.width) * width * aspectCorrection,
      );

      canvas.width = width;
      canvas.height = height;

      // Draw image to canvas
      ctx.drawImage(image, 0, 0, width, height);

      // Extract pixel data
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;

      let asciiStr = "";

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];

        // If the pixel is mostly transparent, map it to a blank space
        if (a < 128) {
          asciiStr += " ";
        } else {
          // Calculate perceived luminance (brightness)
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

          // Map luminance (0-255) to a character in our density string
          const charIndex = Math.floor(
            (luminance / 255) * (DENSITY_CHARS.length - 1),
          );
          asciiStr += DENSITY_CHARS[charIndex];
        }

        // Add a line break at the end of each row
        if ((i / 4 + 1) % width === 0) {
          asciiStr += "\n";
        }
      }

      setAsciiArt(asciiStr);
    };
  }, [src, charWidth]);

  return (
    <pre
      className="font-mono whitespace-pre leading-[1] tracking-widest select-none"
      style={{
        color: color,
        fontSize: "clamp(4px, 0.6vw, 10px)", // Responsive font size
      }}
    >
      {asciiArt}
    </pre>
  );
};

export default AsciiImage;
