import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

type CallBackFunction = (payload: any) => void;

const Emitter = {
    on: (event: string, fn: CallBackFunction) => eventEmitter.on(event, fn),
    once: (event: string, fn: CallBackFunction) => eventEmitter.once(event, fn),
    off: (event: string, fn?: CallBackFunction) => eventEmitter.off(event, fn),
    emit: (event: string, payload?: any) => eventEmitter.emit(event, payload),
};

Object.freeze(Emitter);
export default Emitter;
