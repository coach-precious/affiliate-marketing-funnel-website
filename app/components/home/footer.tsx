export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm mb-4">
          *Results not typical. Requires work and dedication. This is not a
          get-rich-quick program.
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Coach Precious. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
