export default function SafeGuardPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center backdrop-blur-sm">
      <p className="p-5 text-lg text-center font-bold text-gray-100 bg-black/20">
        This app is designed to be use with a PC, as it offers features and
        functionalities that are not optimized for mobile devices. To fully
        experience its capabilities, please access it through your desktop
        computer. Thank you for your understanding!
      </p>
    </div>
  );
}
