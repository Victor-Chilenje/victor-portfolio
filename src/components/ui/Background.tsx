function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-slate-950" />

      <div className="fixed left-20 top-20 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="fixed right-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
    </>
  );
}

export default Background;