// local Files
import "./Diagnosis.css";

type DiagnosisProps = {
  age: number;
  sex: string;
  symptomsids: {
    [key: number]: boolean;
  };
};

const Diagnosis = (props: DiagnosisProps) => {
  return <div>Diagnosis</div>;
};

export default Diagnosis;
