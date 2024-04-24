import DocumentTitle from "../components/DocumentTitle";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";

export default function Registration() {
  return (
    <div className="container">
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
    </div>
  );
}
