import CopyButton from '@/components/copy-btn';
import React from 'react'

const Instructions = ({params}: {params: {formProjectId: string}}) => {

  if (!params.formProjectId)  return (<div>Invalid Project Id</div>);
  if (!process.env.WIDGET_URL) return (<div>WIDGET_URL not available</div>)

  return (
    <div>
        <h1 className='text-xl font-bold mb-2'>Start Collecting Feedback</h1>
        <p className='text-lg text-secondary-foreground '>Embed the code in your site</p>
        <div className='bg-blue-950 p-6 rounded-sm mt-6 relative'>
          <code className=' text-white'>
              {`<my-widget project=${params.formProjectId}></my-widget>`}
              <br />
              {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
          </code>
          <CopyButton text={`<my-widget project=${params.formProjectId}></my-widget>
          \n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
        </div>  
    </div>
  )
}

export default Instructions