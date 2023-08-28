import { createRoot } from 'react-dom/client';
import './style.css' 
const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);

// document.querySelector('body').style.transform = "scale(0.5)"

const rootContainer = document.querySelector('#__root');
if (!rootContainer) throw new Error("Can't find Options root element");
const root = createRoot(rootContainer);
root.style.position = "fixed"
root.render(
  <div className='absolute top-0 right-0 text-lg text-black bg-amber-400 z-50'  >
    content script loaded
  </div>
);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}
