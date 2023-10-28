import Textgradient from "@/components/custom/Textgradient";

const Featuresection = () => {
  const features = [
    "High HD quality images",
    "Best quality animated gif format",
    "Character base routing",
    "Smooth web experience",
    "Unlimited api call",
    "Shareable link",
    `Modern component based architecture !`,
    "Search facilities (coming soon)",
    "Mobile application like interface",
    "Premium design quality",
    "Devise wise responsive",
  ];

  return (
    <div className="w-full md:text-5xl overflow-hidden relative min-h-screen flex justify-center items-center flex-col relative">
      <Textgradient className="w-4/5 md:text-6xl font-bold text-3xl  bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500">
        Features
      </Textgradient>
      <Textgradient className="w-4/5 font-bold md:text-6xl">
        ••••••••••••••••••••••••
      </Textgradient>
      <div className="p-[320px] absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent"></div>
      <div className="w-4/5 z-30">
        <div className="w-full ml-6 md:leading-relaxed">
          {features.map((li, id) => (
            <div key={id} className="flex border">
              <Textgradient className="mx-2 animate-spin flex justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
                ●
              </Textgradient>
              <Textgradient className="text-md font-bold bg-gradient-to-r from-gray-700 via-gray-600 to-slate-800">
                {li}
              </Textgradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featuresection;
