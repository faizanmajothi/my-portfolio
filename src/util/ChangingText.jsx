import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function ChangingText({className,words = ["Hello", "Halo", "Namaste", "Bonjour", "Hola"]}) {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 90,
    deleteSpeed: 60,
  });

  return (
    <div className={className}>
      <span>{text}</span>
      <Cursor cursorStyle="|" />
    </div>
  );
}
