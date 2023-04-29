export default function LoginPage(props) {
  const setPage = props.setPage;

  return (
    <div className="border-dashed border-gray-500 border-2 rounded-md p-3">
      <h1 className="text-3xl pb-5">W4RCH4LKER</h1>
      <div className="flex flex-col gap-2">
        <div className="">
          <label className="block text-left">Email</label>
          <input className="px-1 border-2 border-gray-500 rounded-md" type="text" label="user" placeholder="john.doe@gmail.com" />
        </div>
        <div className="">
          <label className="block text-left">Password</label>
          <input className="px-1 border-2 border-gray-500 rounded-md" type="password" label="user" placeholder="••••••••••" />
        </div>
      </div>
      <div className="pt-5 flex flex-col gap-2">
        <button className="rounded-md bg-emerald-400 border-2 border-black" onClick={() => setPage("main")}>
          Login
        </button>
      </div>
    </div>
  );
}
