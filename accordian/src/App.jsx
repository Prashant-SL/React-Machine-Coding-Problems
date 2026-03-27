import "./App.css";

import Accordion from "./components/Accordian.jsx";

function App() {
  const accordianData = [
    {
      id: "faq_001",
      question: "How can I reset my password?",
      answer:
        "Go to the login page, click on 'Forgot Password', and follow the instructions sent to your registered email.",
      category: "Account",
    },
    {
      id: "faq_002",
      question: "How do I update my profile information?",
      answer:
        "Navigate to your profile settings and click on 'Edit Profile' to update your personal details.",
      category: "Account",
    },
    {
      id: "faq_003",
      question: "Why am I not receiving email notifications?",
      answer:
        "Check your spam folder and ensure email notifications are enabled in your account settings.",
      category: "Notifications",
    },
    {
      id: "faq_004",
      question: "How can I delete my account?",
      answer:
        "Please go to account settings and select 'Delete Account'. Note that this action is irreversible.",
      category: "Account",
    },
    {
      id: "faq_005",
      question: "How do I contact support?",
      answer:
        "You can reach out to our support team via the 'Help & Support' section or email support@example.com.",
      category: "Support",
    },
  ];

  return (
    <div className={"accordion-container"}>
      <h1 className={"accordion-title"}>Frequently Asked Questions</h1>

      <Accordion
        items={accordianData}
        allowMultiple={false}
        defaultOpenIndexes={[0]}
      />
    </div>
  );
}

export default App;
