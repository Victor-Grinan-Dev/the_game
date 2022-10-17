import disabled from '../assets/tile_filters/disabled.png';
import outSight from '../assets/tile_filters/outSight.png';
import selected from '../assets/tile_filters/selected.png';
import unexplored from '../assets/tile_filters/unexplored.png';
import black from '../assets/tile_filters/black.png';
import hostile from '../assets/tile_filters/hostile.png'

export const applyFilter = {
    disabled: disabled,
    outSight: outSight,
    selected: selected,
    unexplored: black,
    onSight: null,
    black: unexplored, //switched
    hostile:hostile
}