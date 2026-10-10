export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-center text-textDim text-sm">
      <p className="opacity-80">
        Készült pokoli szeretettel, Millie felügyelete alatt. © 2024 - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
