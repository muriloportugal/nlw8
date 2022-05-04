import { ArrowLeft } from "phosphor-react";
import { FeedBackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentStepProps {
  feedBackType: FeedBackType;
}

export function FeedBackContentStep({feedBackType}:FeedBackContentStepProps){
  const feedBackTypeInfo = feedbackTypes[feedBackType];
  return (
    <>
      <header>
        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img 
            className="w-6 h-6"
            src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} 
          />
          {feedBackTypeInfo.title}
        </span>
        <CloseButton/>
      </header>
      
      <div className="flex py-8 gap-2 w-full">
        
      </div>
    </>
  );
}