import '@styles/global.css';

import Nav from '@components/Nav';


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
                {children}
            </main>
            
        </body>
    </html>
  )
}

export default RootLayout
