const Footer = () => {
  return (
    <div className="w-full h-[253px] px-16 py-12 bg-slate-200 rounded-2xl flex-col justify-center grid items-center gap-8 inline-flex">
      <div className="self-stretch h-[157px] flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[231px] h-[29px] justify-center items-center inline-flex">
              <div className="w-[231px] h-[29px] relative">
                <img src='/images/auth/logo.png' alt='Logo image' />
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 text-blue-950 text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Lectus facilisi id bibendum quis consectetur egestas. </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-indigo-900 text-lg font-medium">Bussiness</div>
            <div className="text-neutral-600 text-base font-normal">Hire</div>
            <div className="text-neutral-600 text-base font-normal">Training</div>
            <div className="text-neutral-600 text-base font-normal">Scaling</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-indigo-900 text-lg font-medium">Bussiness</div>
            <div className="text-neutral-600 text-base font-normal">Hire</div>
            <div className="text-neutral-600 text-base font-normal">Training</div>
            <div className="text-neutral-600 text-base font-normal">Scaling</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-indigo-900 text-lg font-medium">Bussiness</div>
            <div className="text-neutral-600 text-base font-normal">Hire</div>
            <div className="text-neutral-600 text-base font-normal">Training</div>
            <div className="text-neutral-600 text-base font-normal">Scaling</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-indigo-900 text-lg font-medium">Fllow Us</div>
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-6 h-6 relative">
                <img src="/images/jobs/entypo-social_twitter-with-circle.png" />
              </div>
              <div className="w-6 h-6 relative">
                <img src="/images/jobs/entypo-social_youtube-with-circle.png" />
              </div>
              <div className="w-6 h-6 relative">
                <img src="/images/jobs/entypo-social_facebook-with-circle.png" />
              </div>
              <div className="w-6 h-6 relative">
                <img src="/images/jobs/entypo-social_pinterest-with-circle.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
          <div><span className="text-neutral-600 text-sm font-normal">Copyright © All rights reserved by </span><span className="text-blue-500 text-sm font-normal underline">Salesmagiq</span></div>
        </div>
      </div>
    </div>
  )
}

export default Footer;