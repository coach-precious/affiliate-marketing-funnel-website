const Step6 = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="italic">
        Great!{" "}
        <span className="font-bold text-xl underline text-yellow-300">
          Last question...
        </span>{" "}
        in order to make{" "}
        <span className="text-3xl text-green-400 font-bold">N100k</span> a
        Month, you'll need{" "}
        <span className="text-2xl text-yellow-300">two(2) things</span>:
      </h3>

      <ol className="text-gray-300 font-bold text-xl text-left flex flex-col gap-6 list-decimal pl-4">
        <li>
          A <span className="text-green-400">Smart Phone</span> with{" "}
          <span className="text-amber-400">internet data </span>
          <span className="italic text-blue-400">
            (I guess you already have this)
          </span>
        </li>
        <li>
          The{" "}
          <span className="text-green-500 underline">willingness to learn</span>
          ,{" "}
          <span className="text-purple-500 underline">
            follow simple instructions
          </span>{" "}
          and <span className="text-amber-300 underline">take fast action</span>
          .
        </li>
      </ol>
    </div>
  );
};

export default Step6;
