import '@styles/global.css';

import Nav from '@components/Nav';
import DeployApp from '@components/DeployApp';



export const metadata= {
    title: "nextjsdemoapp",
    description: "Discover & share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body className='main'>
         
            <main >
                <Nav/>
                <DeployApp/>
                {children}
            </main>
            
        </body>
    </html>
  )
}

export default RootLayout
