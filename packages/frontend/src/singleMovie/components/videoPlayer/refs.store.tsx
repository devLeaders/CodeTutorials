interface Refs {
    ref: { current: any };
};

class RefsStore {
    Refs: any = []

}


export const refsStore = new RefsStore()