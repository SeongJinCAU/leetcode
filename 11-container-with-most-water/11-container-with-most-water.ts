function maxArea(height: number[]): number {
    let maxArea : number = 0;
    let start : number = 0, end : number = height.length - 1;
    while(start < end){
        maxArea = Math.max((end - start) * Math.min(height[start], height[end]), maxArea);
        if(height[start] < height[end]){
            start += 1;
        }else{
            end-=1;
        }
    }
    return maxArea;
};