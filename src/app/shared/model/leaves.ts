






export interface Ileaves {
    id: string;
    empName: string;
    startDate: string;
    endDate: string;
    reason: string;
    status: leaveStatus
    numOfDat?: number
}

export enum leaveStatus {
    Pending = 'Pending',
    Approved = 'Approved',
    Reject = 'Reject'
}