import React from 'react';
import { 
  Card, 
  ToggleSwitch, 
  Button, 
  Tab, 
  Tooltip, 
  Badge, 
  ProgressBar, 
  ProfilePicture, 
  Tag, 
  Breadcrumb 
} from './components';
import './App.css'; // If you have global styles

function App() {
  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];

  return (
    <div className="App">
      <Card>
        <h2>Card Title</h2>
        <p>This is a card component.</p>
      </Card>
      <ToggleSwitch />
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Tab tabs={tabs} />
      <Tooltip text="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>
      <Badge type="success">Success</Badge>
      <ProgressBar progress={50} />
      <ProfilePicture src="profile.jpg" alt="Profile" />
      <Tag text="Tag" />
      <Breadcrumb items={['Home', 'Category', 'Item']} />
    </div>
  );
}

export default App;
