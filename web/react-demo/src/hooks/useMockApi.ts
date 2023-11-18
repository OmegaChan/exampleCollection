import { useCallback } from "react";

export const useMockApi = () => {
    const promiseApi = useCallback((mockData: any, time: number) => {
        return new Promise((resolve) => {
            setTimeout(resolve, time, mockData);
        });
    }, []);
    return {
        promiseApi
    }
}