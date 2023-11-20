import "./TabsButton.css";

function TabsButton({ children, iSelected, ...props }) {
  return (
    <li>
      <button className={iSelected ? "tab active" : "tab"} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabsButton;
