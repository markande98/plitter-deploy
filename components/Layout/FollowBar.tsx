const FollowBar = () => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white font-semibold text-xl">Who to follow</h2>
        <div className="flex flex-col mt-4 gap-6">{/* {Todo user list} */}</div>
      </div>
    </div>
  );
};

export default FollowBar;
