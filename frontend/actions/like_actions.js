import * as LikeUtil from '../utils/like_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = () => ({
    type: REMOVE_LIKE
});

export const createLike = like => dispatch => (
    LikeUtil.createLike(like).then(
        like => dispatch(receiveLike(like))
    )
);

export const deleteLike = likeId => dispatch => (
    LikeUtil.deleteLike(likeId).then(
        () => dispatch(removeLike())
    )
);