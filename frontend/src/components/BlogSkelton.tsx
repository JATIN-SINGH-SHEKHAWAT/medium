import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return (
         <div className="p-4 border-b border-slate-200 pb-4 w-full max-w-2xl mx-auto cursor-pointer">
                <div className="flex">
                  <div className="h-4 w-4  bg-gray-200 rounded-full 700 w-48 mb-4"></div>
                   <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                  <div className="flex items-center px-2">
                    <Circle />
                  </div>
                  <div className="text-sm text-slate-500">
                     <div className="h-4 w-4  bg-gray-200 rounded-full 700 w-48 mb-4"></div>
                  </div>
                </div>
                <div className="text-xl font-bold pt-2 text-slate-900">
                     <div className="h-4 w-4  bg-gray-200 rounded-full 700 w-48 mb-4"></div>
                </div>
                <div className="text-base text-slate-700 pt-1 font-normal">
                   <div className="h-4 w-4  bg-gray-200 rounded-full 700 w-48 mb-4"></div>
                </div>
                <div className="text-slate-500 text-sm pt-4">
                   <div className="h-4 w-4  bg-gray-200 rounded-full 700 w-48 mb-4"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              
    )
    


}

export const FullBlogSkeleton = () => {
  return (
    <div>
      <div className="h-16 bg-slate-200 animate-pulse"></div>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
          <div className="col-span-8">
            {/* Title Skeleton */}
            <div className="h-12 bg-slate-200 rounded-md animate-pulse w-3/4 mb-4"></div>
            
            {/* Date Skeleton */}
            <div className="h-4 bg-slate-200 rounded-md animate-pulse w-48 mb-6"></div>
            
            {/* Content Skeleton - Multiple lines */}
            <div className="space-y-3">
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-4/5"></div>
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-full"></div>
              <div className="h-4 bg-slate-200 rounded-md animate-pulse w-3/4"></div>
            </div>
          </div>
          
          <div className="col-span-4 pl-8">
            {/* "Author" text skeleton */}
            <div className="h-4 bg-slate-200 rounded-md animate-pulse w-20 mb-4"></div>
            
            <div className="flex">
              {/* Avatar Skeleton */}
              <div className="flex justify-center flex-col">
                <div className="w-12 h-12 bg-slate-200 rounded-full animate-pulse"></div>
              </div>
              
              <div className="ml-3 flex-1">
                {/* Author name skeleton */}
                <div className="h-6 bg-slate-200 rounded-md animate-pulse w-32 mb-2"></div>
                
                {/* Author description skeleton */}
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded-md animate-pulse w-full"></div>
                  <div className="h-3 bg-slate-200 rounded-md animate-pulse w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};