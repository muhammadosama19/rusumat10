"use client";

export default function Models_navbar() {
  return (
    <div>
      <Exaple />
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box border-0">
          <div className="">
            <span className="flex items-end w-full h-20 font-medium bg-orange-500 rounded-ss-md rounded-se-md p-2 text-xl dark:text-[#101010]">
              #1545461
            </span>
            <span className="flex items-end w-full h-20 font-medium bg-emerald-500 p-2 text-xl dark:text-[#101010]">
              #1545461
            </span>
            <span className="flex items-end w-full h-20 font-medium bg-blue-500 p-2 text-xl dark:text-[#101010]">
              #1545461
            </span>
            <span className="flex items-end w-full h-20 font-medium bg-yellow-500 rounded-es-md rounded-ee-md p-2 text-xl dark:text-[#101010]">
              #1545461
            </span>
          </div>
          <div className=" grid grid-cols-3 mt-3">
            <span className="mx-1 p-2 ring-1 hover:bg-indigo-600 text-center hover:text-white rounded-md">
              love
            </span>
            <span className="mx-1 p-2 ring-1 hover:bg-indigo-600 text-center hover:text-white rounded-md">
              save
            </span>
            <span className="mx-1 p-2 ring-1 hover:bg-indigo-600 text-center hover:text-white rounded-md">
              menu
            </span>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

function Exaple() {
  return (
    <div>
      <div
        className="grid grid-cols-4"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <span className="flex w-full h-16 bg-orange-500 rounded-s-md"></span>
        <span className="flex w-full h-16 bg-emerald-500"></span>
        <span className="flex w-full h-16 bg-blue-500"></span>
        <span className="flex w-full h-16 bg-yellow-500 rounded-e-md"></span>
      </div>
      <div className=" flex justify-end items-center mt-1">
        <span className="ml-3 ">love</span>
        <span className="ml-3 ">save</span>
        <span className="ml-3 ">menu</span>
      </div>
    </div>
  );
}


let Elemeny_Alemet_const = {
  apple:['apple'],
  google:['apple','fi-rr-apple'],
  facebook:['apple','fi-rr-apple']
}
export function Elemeny_Alemet() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-3 dark:bg-[#101010]">
          <div className="flex justify-between">
            <i
              className={`p-5 text-5xl rounded-lg flex justify-center items-center dark:bg-[#202020] default:bg-white fi fi-brands-instagram`}
            ></i>
            <h1 className="text-right flex justify-end">{Elemeny_Alemet_const.apple[0]}</h1>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div className="grid grid-cols-9 gap-5">
        <i
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className={`cursor-pointer p-7 text-2xl rounded-lg flex justify-center items-center dark:bg-[#101010] default:bg-white hover:bg-[#202020] fi fi-brands-instagram`}
        ></i>
      </div>
    </div>
  );
}
