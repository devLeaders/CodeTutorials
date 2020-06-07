interface Refs {
    ref: { current: any };
};

class RefsStore {
    Refs: any = []
    RefsSmall: any = []
}


export const refsStore = new RefsStore()