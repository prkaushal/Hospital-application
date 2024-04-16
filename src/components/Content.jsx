import React from "react";
import CheckBedAvailability from "./CheckBedAvailability";
import OnlineConsultancies from "./OnlineConsultancies";
import DiebetesPredictor from "./DiebetesPredictor";
import HeartDiseasePredictor from "./HeartDiseasePredictor";


const Content = ({ selectedOption }) => {
  const renderContent = () => {
    switch (selectedOption) {
      case "Check bed availability":
        return <div>
            <CheckBedAvailability/>
        </div>;
      case "Online Consultencies":
        return <div>
            <OnlineConsultancies/>
        </div>;
      case "Diebetes predictor":
        return <div>
            <DiebetesPredictor/>
        </div>;
      case "Heart Disease Predictor":
        return <div>
            <HeartDiseasePredictor/>
        </div>;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <>
      <div className="content">
        <h1>{selectedOption  ? selectedOption : "Select an option"}</h1>
      </div>
      <div className="content">{renderContent()}</div>
    </>
  );
};

export default Content;
