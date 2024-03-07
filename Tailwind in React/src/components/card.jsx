import React from 'react'

function Card(props) {
  return (
    <>
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img class="w-24 h-24 rounded-full mx-auto" src="https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj" alt="" width="384" height="512"/>
    <div class="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          {props.name}
        </div>
        <div class="text-slate-700 dark:text-slate-500">
         {props.work || "Not Working Yet"}
        </div>
      </figcaption>
    </div>
  </figure>
  <br />
 </> 
  )
}

export default Card