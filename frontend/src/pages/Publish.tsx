import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState, type ChangeEvent, type ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar></Appbar>
      <div className="flex  justify-center pt-5">
        <div className="max-w-screen-lg w-full">
          <div>
            <input onChange={(e) => {
                setTitle(e.target.value);
            }}
              type="text"
              placeholder="Title" 
              className="w-full text-3xl font-bold text-gray-900 bg-transparent 
          focus:outline-none focus:ring-0 border-b border-transparent 
           placeholder-gray-400"
              required
            />
          </div>
          <TextEditor  onChange={(e) => {
                setDescription(e.target.value);
            }} />
          <div className="mt-4">
            <button
              onClick={async () => {
               const response = await  axios.post(`${BACKEND_URL}/api/v1/blog`, {
                  title,
                  content: description
                }, 
            {
                headers: {
                    Authorization : localStorage.getItem("token")
                }
            });
                navigate(`/blog/${response.data.id}`)
              }}
              type="button"
              className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-full text-sm px-4 py-1.5 transition-colors"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange} : {onChange : (e : ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <form className="w-full mx-auto mt-6 space-y-4">
      <div className="w-full  rounded-xl shadow-sm bg-white">
        <div className="p-4">
          <textarea 
          onChange={onChange}
            id="editor"
            rows={10}
            className="w-full text-md font-semibold text-gray-800 bg-white  rounded-lg 
              outline-none resize-none p-2"
            placeholder="Start writing your article..."
            required
          />
        </div>
      </div>
    </form>
  );
}
