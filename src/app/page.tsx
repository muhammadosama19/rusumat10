export default function Home() {
  return (
    <main className="h-full">
      <section className="grid grid-cols-2 gap-5 m-5 h-[480px]">
        <div className="mt-32">
          <h1 className="text-4xl font-medium">
            <h1 className="text-6xl font-bold my-5 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-violet-800">
              Empower
            </h1>
            your business with API from Flaticon
          </h1>
        </div>
        <div className="mt-32"></div>
      </section>

      <section className="grid grid-cols-3 gap-5 m-10 h-96">
        <div className="w-full h-60 bg-[#101010] rounded-xl"></div>
        <div className="w-full h-60 bg-[#101010] rounded-xl"></div>
        <div className="w-full h-60 bg-[#101010] rounded-xl"></div>
      </section>
    </main>
  );
}
