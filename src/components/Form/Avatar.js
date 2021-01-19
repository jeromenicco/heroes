import React from 'react';

import './Avatar.css';

const Avatar = ({onClick, avatar}) => {
	return(
		<div className='avatar-container'>
			<h2 className='titleAvatar'>Choose avatar</h2>
			
			<div className='avatar-choice-container'>

				<div className='imgBox' onClick={onClick}>
					<img className='yourAvatar' src='https://store.playstation.com/store/api/chihiro/00_09_000/container/FR/fr/999/EP0700-CUSA06014_00-AV00000000000005/1584963560000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
					 name='king'
					 alt='king'
					 style={ avatar === 'king' ? {transform: 'scale(1.1)'} : {}}
					 />
				</div>

				<div className='imgBox' onClick={onClick}>
					<img className='yourAvatar' src='https://store.playstation.com/store/api/chihiro/00_09_000/container/BE/fr/999/EP0700-CUSA06014_00-AV00000000000012/1584963561000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
					name='bryan'
					alt='bryan'
					style={ avatar === 'bryan' ? {transform: 'scale(1.1)'} : {}}
					/>
				</div>

				<div className='imgBox' onClick={onClick}>
					<img className='yourAvatar' src='https://store.playstation.com/store/api/chihiro/00_09_000/container/FR/fr/999/EP0700-CUSA06014_00-AV00000000000018/1584963560000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
					name='lars'
					alt='lars'
					style={ avatar === 'lars' ? {transform: 'scale(1.1)'} : {}} />
				</div>


				<div className='imgBox' onClick={onClick}>
					<img className='yourAvatar' src='https://store.playstation.com/store/api/chihiro/00_09_000/container/FR/fr/999/EP0700-CUSA06014_00-AV00000000000014/1584963560000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
					name='eliza'
					alt='eliza' 
					style={ avatar === 'eliza' ? {transform: 'scale(1.1)'} : {}} />
				</div>

				<div className='imgBox' onClick={onClick}>
					<img className='yourAvatar' src='https://store.playstation.com/store/api/chihiro/00_09_000/container/FR/fr/999/EP0700-CUSA06014_00-AV00000000000008/1584963560000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
					name='nina'
					alt='nina'
					style={ avatar === 'nina' ? {transform: 'scale(1.1)'} : {}} />
				</div>

				<div className='imgBox' onClick={onClick}>
					<img className='yourAvatar' src='https://store.playstation.com/store/api/chihiro/00_09_000/container/FR/fr/999/EP0700-CUSA06014_00-AV00000000000020/1584963567000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'
					name='ling'
					alt='ling xiaoyu'
					style={ avatar === 'ling' ? {transform: 'scale(1.1)'} : {}} />
				</div>
			</div>
		</div>
	)
}

export default Avatar
