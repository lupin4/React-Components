import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want. Yes, you can.",
    },
    {
      id: "2",
      label: "Can I use Javascript on a project?",
      content: "You can use Javascript on any project you want. Yes, you can.",
    },
    {
      id: "3",
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any project you want. Yes, you can.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
