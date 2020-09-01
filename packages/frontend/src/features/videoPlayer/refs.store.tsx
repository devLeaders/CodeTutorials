interface IRefs {
    current: HTMLMediaElement;
};

class RefsStore {
    Refs: IRefs[] = []
    RefsSmall:IRefs[] = []
}


export const refsStore = new RefsStore()