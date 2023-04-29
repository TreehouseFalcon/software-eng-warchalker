import { useState } from "react";
import Topbar from "./Topbar";
import MarkAccessPoint from "./MarkAccessPoint";
import EditAccessPoint from "./EditAccessPoint";
import ViewAccessPoint from "./ViewAccessPoint";
import EditProfile from "./EditProfile";
import ViewProfile from "./ViewProfile";
import Rate from "./Rate";

export default function MainPage(props) {
  const page = props.page;
  const setPage = props.setPage;

  const [modalVisible, setModalVisible] = useState("");
  const [profileMode, setProfileMode] = useState("");
  const [rateVisible, setRateVisible] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Topbar page={page} setPage={setPage} />
      <div className="flex-grow">
        <div className="flex flex-row h-full">
          <div className="w-56 h-full flex flex-col gap-2">
            <button
              className="py-2 w-full hover:bg-sky-300 transition-colors"
              onClick={() => {
                setModalVisible("mark");
              }}
            >
              Mark Access Point
            </button>
            <button
              className="py-2 w-full hover:bg-sky-300 transition-colors"
              onClick={() => {
                setProfileMode("edit");
              }}
            >
              Edit Your Profile
            </button>
            <p className="mt-auto">(click access point on map to view/edit)</p>
          </div>
          <div className="w-full h-full">
            <div className="absolute">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/A_large_blank_world_map_with_oceans_marked_in_blue.PNG" />
            </div>
            <div className="absolute">
              <button
                className="p-4 rounded-full bg-red-600 mt-48 ml-40 hover:p-5 transition-all"
                onClick={() => {
                  setModalVisible("view");
                }}
              ></button>
            </div>
            <div className="absolute">
              <div className="mt-2 ml-2 flex flex-col gap-2 items-left">
                <input className="rounded-md text-lg px-2 border-2 border-gray-500 w-96" placeholder="Search for access points..." type="text" />
                {modalVisible === "view" && (
                  <ViewAccessPoint
                    onSave={() => {
                      setModalVisible("");
                    }}
                    onEdit={() => {
                      setModalVisible("edit");
                    }}
                    onViewProfile={() => {
                      setProfileMode("view");
                    }}
                    onRate={() => {
                      setRateVisible(true);
                    }}
                  />
                )}
                {modalVisible === "mark" && (
                  <MarkAccessPoint
                    onSave={() => {
                      setModalVisible("");
                    }}
                  />
                )}
                {modalVisible === "edit" && (
                  <EditAccessPoint
                    onSave={() => {
                      setModalVisible("");
                    }}
                  />
                )}

                {rateVisible && (
                  <Rate
                    onSave={() => {
                      setRateVisible(false);
                    }}
                  />
                )}

                {profileMode === "view" && (
                  <ViewProfile
                    onSave={() => {
                      setProfileMode("");
                    }}
                  />
                )}
                {profileMode === "edit" && (
                  <EditProfile
                    onSave={() => {
                      setProfileMode("");
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
