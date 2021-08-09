import { Entity } from "../Models/Entity";

export interface EntityState<T extends Entity = Entity> {
    byId: {
        [id: number]: T;
    }
}

export const getIds = (entities: Entity[]) => {
    return entities.map((e) => e.id);
};

export const addOne = <T extends EntityState>(state: EntityState, entity: Entity) => {
    return { ...state, [entity.id]: entity } as T;
};

export const addMany = <T extends EntityState = EntityState>(state: EntityState, entities: Entity[]) => {
    if (entities.length === 0) {
        return state as T;
    }
    const entityMap = entities.reduce((prev, entity) => {
        return { ...prev, [entity.id]: entity };
    }, {});
    return {
        ...state,
        byId: { ...state.byId, ...entityMap }
    } as T;
}