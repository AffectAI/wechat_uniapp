<template>
	<view class="page24-wrap">
		<!-- 心湖倒影 -->
		<view style="color: #434343;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">解忧日记第一卷</view>

		<view style="padding: 0 19px;margin-top: 45px;">
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">1. 在过去的两周里, 您感到紧张、焦虑或烦躁？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value1" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">2. 在过去的两周里, 您感到无法停止或控制担心？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value2" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">3. 在过去的两周里, 您对各类事情过分担心？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value3" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">4.  在过去的两周里, 您感到很难放松下来？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value4" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">5. 在过去的两周里, 您感到焦躁不安，以至于难以安静地坐着？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value5" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">6.  在过去的两周里, 您变得容易烦恼或急躁？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value6" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">7. 在过去的两周里, 您担心因为有什么可怕的事情要发生而感到害怕？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value7" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">8. 您是一位做事认真彻底的人？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value8" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">9. 在过去的两周里，您做各种事时缺乏兴趣或乐趣？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value9" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">10. 在过去的两周里，您感到心情低落 ，沮丧或绝望？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value10" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">11. 在过去的两周里，您入睡困难，睡不安稳或睡眠过多？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value11" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">12.  在过去的两周里，您感觉疲倦或没有活力？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value12" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">13. 在过去的两周里，您食欲不振或吃的太多？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value13" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">14.  在过去的两周里，您觉得自己很糟，很失败，让自己或家人失望？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value14" @change="radioGroupChange">
						<u-radio 
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
	
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">15.  在过去的两周里，您难以专注的做事情，例如专注阅读报纸或看电视？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value15" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">16. 在过去的两周里，您动作或说话变得非常缓慢，以至于别人可能注意到。或者相反，变得非常烦躁或不安，以至于比平时活动更多？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value16" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">17. 在过去的两周里，您有不如死掉，或伤害自己的念头？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value17" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">18. 最近你是否曾有自我感觉和/或他人观察到的忧郁？例如：如沮丧、悲哀、悲观、无望和无助？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value18" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">19. 最近你是否有嗜睡状况，总睡眠时间增加，包括白天的睡眠时间？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value19" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">20. 最近你是否出现食欲减退（增加）的情况？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value20" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">21.  最近你是否感到社交活动和人际互动有减少？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value21" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">22. 最近你是否感到精力、动力或目标导向性行为的减少？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value22" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">23.  最近你是否主观上感到动力、积极性下降，导致目标导向的活动减少？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value23" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">24. 最近你是否感到注意力、专注力或记忆力下降，导致身体或智力方面受损。？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value24" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">25. 在过去的两周里，您动作或说话变得非常缓慢，以至于别人可能注意到。或者相反，变得非常烦躁或不安，以至于比平时活动更多？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value25" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">26. 最近你是否出现担心、紧张或身体上的焦虑症状？例如：颤抖、心悸、眩晕、头疼、发麻、冒 汗、呼吸困难、心慌、腹泻？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value26" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">27. 最近你是否感到在日常活动中获得乐趣的能力降低了？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value27" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">28. 最近你是否感到情感或情绪的强度减弱了，类型减少了。？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value28" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">29. 最近你是否主观上感到自我价值或自我意义的降低？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value29" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">30. 最近你是否对未来感到悲观或沮丧、感到无法应对，有失控的感觉？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value30" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">31. 最近你是否认为生命没有价值，以及有过关于死亡或自杀的念头？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value31" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">32. 最近你是否感到自责、失败，或为过去不管是真实的还是想象中的错误感到悔恨？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value32" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">33. 最近你是否出现过不合理的执着信念、妄想或幻觉？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value33" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">34. 最近你是否出现反常的易怒、脾气暴躁、容易发火，表现为言语或肢体上的爆发？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value34" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">35. 最近你是否注意到情绪不稳定或情绪波动增加？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value35" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">36. 最近你是否感觉更有活力和动力了？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value36" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">37. 最近你是否观察到自己的语速加快、说的话变多，或思维更加活跃了？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value37" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			
			<view style="margin-bottom: 22px;">
				<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">38. 最近你是否观察到自己变得坐立不安或者异常兴奋？</view>
				<view >
					<u-radio-group width="160px" active-color="#007EAE" label-size="50px" size="20px" v-model="values.value38" @change="radioGroupChange">
						<u-radio 
							
							v-for="(item, index) in list1" :key="index" 
							:name="item.value"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		
		<view class="nextPage" @click="next">提交</view>
		<!-- <view style="width: 280px;display: flex;margin: 0 auto;justify-content: space-between;">
			<view class="nextPage" v-if="index != 1" @click="prePage"> 上一页 </view>
			<view class="nextPage" v-if="index != 4" @click="nextPage"> 下一页 </view>
			
			<view class="nextPage" v-if="index == 4" @click="next">下一卷</view>
		</view> -->
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				values: {
					value1: '',
					value2: '',
					value3: '',
					value4: '',
					value5: '',
					value6: '',
					value7: '',
					value8: '',
					value9: '',
					value10: '',
					value11: '',
					value12: '',
					value13: '',
					value14: '',
					value15: '',
					value16: '',
					value17: '',
					value18: '',
					value19: '',
					value20: '',
					value21: '',
					value22: '',
					value23: '',
					value24: '',
					value25: '',
					value26: '',
					value27: '',
					value28: '',
					value29: '',
					value30: '',
					value31: '',
					value32: '',
					value33: '',
					value34: '',
					value35: '',
					value36: '',
					value37: '',
					value38: '',
				},
				
				list1: [
					{name: '完全不会', value: '0'},
					{name: '有几天', value: '1'},
					{name: '一半以上的日子', value: '2'},
					{name: '几乎每天', value: '3'},
				],
				index: 1,
			}
		},
		methods: {
			radioGroupChange() {},
			next() {
				// uni.navigateTo({
				// 	url: '/pages/componentsA/page25/index'
				// })
				let status = null;
				for (let key in this.values) {
					if(this.values[key] == '' || this.values[key] == null) {
						status = true
					}
				    console.log(key + ": " + this.values[key]);
				}
				if(status == true) {
					this.$refs.uToast.show({
						title: '请完善选项！',
						type: 'error',
					})
					return
				}
				// this.$emit('pageEvent', {pageIndex: 'page24_1'})
			},
			prePage() {
				if(this.index <= 1) {
					this.index = 1
					return
				}
				this.index -= 1;
			},
			nextPage() {
				if(this.index >= 4) {
					this.index = 4
					return
				}
				this.index += 1;
			}
		}
	}
</script>

<style lang="scss">
	.nextPage {
		width: 110px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		border-radius: 5px;
		background-color: #f8d164;
		color: #000;
		font-size: 14px;
		font-weight: 400;
		margin: 50px auto;
	}
	.page24-wrap {
		min-height: 100vh;
		background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img34.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		padding-bottom: 20px;
		
	
		.submit1 {
			width: 140px;
			height: 43px;
			line-height: 43px;
			text-align: center;
			border-radius: 5px;
			background-color: #f8d164;
			
			color: #000;
			font-size: 14px;
			font-weight: 400;
			margin: 20px auto 50px auto;
			// box-shadow: -1px 2px 5px 0px rgb(179, 179 ,179);

		}
		
		.dialogue {
			width: 96%;
			margin: 0 auto;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 5px;
			margin: auto;
			// padding-bottom: 20px;
			
			.top {
				width: 110px;
				height: 36px;
				line-height: 36px;
				background-color: #C8F0FA;
				color: #434343;
				font-size: 18px;
				text-align: center;
				border-top-right-radius: 8px;
				border-top-left-radius: 8px;
			}
			.center {
				display: flex;background-color: #f1f1f4;
				border-top-right-radius: 10px;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				height: 158px;	
				box-sizing: border-box;
				padding: 11px 21px;
			}
			
		}
	}
	
	::v-deep .u-radio__label {
		color: #292929 !important;
		font-size: 34rpx !important;
	}
	::v-deep .u-radio__icon-wrap {
		border: 1px solid #292929 !important;
	}
</style>