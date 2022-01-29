import ChannelBar from './ChannelBar';
import Sidebar from './SideBar';
import ContentContainer from './ContentContainer';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
