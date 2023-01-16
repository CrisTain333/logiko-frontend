import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const PostModal = ({ showModal, setShowModal }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const localDarkMode = localStorage.getItem("Dark-Mode");
  console.log(localDarkMode);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  console.log(input);

  // handle post
  const handlePost = (e) => {
    e.preventDefault();
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <div className="z-50">
      {showModal ? (
        <>
          <form action="" onSubmit={handlePost}>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg pt-14 mx-auto bg-base-200 rounded-md shadow-lg">
                  <button
                    className="bg-info p-1 rounded-full absolute right-3 top-3"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-accent"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 font-semibold text-xl">
                    Create Post
                  </h1>
                  <div className="divider my-0"></div>
                  <div className="p-5">
                    <textarea
                      value={input}
                      onClick={() => setShowEmojis(false)}
                      onChange={(e) => setInput(e.target.value)}
                      type="text"
                      rows={2}
                      id="simple-search"
                      className="rounded-md font-medium text-xl w-full pl-5 p-2.5 focus:border-none focus:outline-none"
                      placeholder="What's on your mind?"
                      required
                    />

                    {selectedImage && (
                      <div>
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Thumb"
                          className="h-[50%]"
                        />
                        <button onClick={removeSelectedImage}>
                          Remove This Image
                        </button>
                      </div>
                    )}
                    <div className="w-full flex justify-between relative">
                      <div className="flex items-center">
                        <button className="flex items-center justify-center px-4 hover:bg-info w-full py-2 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-green-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>
                          <label
                            htmlFor="fileInput"
                            className="text-base-900 font-medium"
                          >
                            Photo/Video
                          </label>
                          <input
                            type="file"
                            className="hidden"
                            onChange={imageChange}
                            accept="image/*"
                            id="fileInput"
                          />
                        </button>
                        <button className="flex items-center justify-center px-4 hover:bg-info w-full py-2 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-yellow-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>

                          {/* <p className="text-base-900 font-medium">
                            Feeling/Activity
                          </p> */}
                        </button>
                      </div>
                      <button
                        className=""
                        onClick={() => setShowEmojis(!showEmojis)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                          />
                        </svg>
                      </button>
                    </div>
                    {showEmojis && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-1/2 translate-y-1/2">
                        <Picker
                          searchPosition="none"
                          data={data}
                          theme={localDarkMode === "true" ? "dark" : "light"}
                          previewPosition="none"
                          onEmojiSelect={addEmoji}
                        />
                      </div>
                    )}
                    <button
                      onClick={() => setShowModal(false)}
                      className="w-full bg-primary text-white font-bold py-[0.6rem] px-8 mt-5 rounded-md"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default PostModal;
