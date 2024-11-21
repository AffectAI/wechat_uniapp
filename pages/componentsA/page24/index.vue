<template>
	<view class="page24-wrap">
		
		<view v-if="index == 1">
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
			</view>
			
		</view>
		<view v-if="index == 2">
			<view style="color: #434343;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">解忧日记第二卷</view>
			<view style="padding: 0 19px;margin-top: 45px;">
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">1. 在过去的两周里，您做各种事时缺乏兴趣或乐趣？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">2. 在过去的两周里，您感到心情低落 ，沮丧或绝望？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">3. 在过去的两周里，您入睡困难，睡不安稳或睡眠过多？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">4. 在过去的两周里，您感觉疲倦或没有活力？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">5. 在过去的两周里，您食欲不振或吃的太多？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">6. 在过去的两周里，您觉得自己很糟，很失败，让自己或家人失望？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">7. 在过去的两周里，您难以专注的做事情，例如专注阅读报纸或看电视？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">8. 在过去的两周里，您动作或说话变得非常缓慢，以至于别人可能注意到。或者相反，变得非常烦躁或不安，以至于比平时活动更多？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">9. 在过去的两周里，您有不如死掉，或伤害自己的念头？</view>
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
			</view>
			
		</view>
		<view v-if="index == 3">
			<view style="color: #434343;font-size: 20px;text-align: center;margin-bottom: 25px;padding-top: 35px;">解忧日记第三卷</view>
			
			<view style="padding: 0 19px;margin-top: 45px;">
				<view style="margin-bottom: 22px;">
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">1. 最近你是否曾有自我感觉和/或他人观察到的忧郁？例如：如沮丧、悲哀、悲观、无望和无助？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">2. 最近你是否有嗜睡状况，总睡眠时间增加，包括白天的睡眠时间？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">3. 最近你是否出现食欲减退（增加）的情况？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">4.  最近你是否感到社交活动和人际互动有减少？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">5. 最近你是否感到精力、动力或目标导向性行为的减少？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">6.  最近你是否主观上感到动力、积极性下降，导致目标导向的活动减少？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">7. 最近你是否感到注意力、专注力或记忆力下降，导致身体或智力方面受损。？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">8. 最近你是否出现担心、紧张或身体上的焦虑症状？例如：颤抖、心悸、眩晕、头疼、发麻、冒 汗、呼吸困难、心慌、腹泻？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">9. 最近你是否感到在日常活动中获得乐趣的能力降低了？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">10. 最近你是否感到情感或情绪的强度减弱了，类型减少了。？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">11. 最近你是否主观上感到自我价值或自我意义的降低？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">12. 最近你是否对未来感到悲观或沮丧、感到无法应对，有失控的感觉？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">13. 最近你是否认为生命没有价值，以及有过关于死亡或自杀的念头？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">14. 最近你是否感到自责、失败，或为过去不管是真实的还是想象中的错误感到悔恨？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">15. 最近你是否出现过不合理的执着信念、妄想或幻觉？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">16. 最近你是否出现反常的易怒、脾气暴躁、容易发火，表现为言语或肢体上的爆发？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">17. 最近你是否注意到情绪不稳定或情绪波动增加？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">18. 最近你是否感觉更有活力和动力了？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">19. 最近你是否观察到自己的语速加快、说的话变多，或思维更加活跃了？</view>
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
					<view style="color: #434343;font-size: 17px;text-align: left;font-weight: 500;margin-bottom: 10px;">20. 最近你是否观察到自己变得坐立不安或者异常兴奋？</view>
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
			
		</view>
		<view style="width: 280px;display: flex;margin: 0 auto;justify-content: space-between;">
			<view class="nextPage" v-if="index == 1 || index == 2" @click="nextPage"> 下一卷 </view>
			
			<view class="nextPage" v-if="index == 3" @click="next">提交</view>
		</view>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		props: ['gloAvtorUrl'],
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
					value18: '',
					value19: '',
					value20: '',
					value21: '',
					value22: '',
					value23: '',
					value24: '',
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
				// 第一卷
				GAD_7: {
					B2_T1: '',
					B2_T2: '',
					B2_T3: '',
					B2_T4: '',
					B2_T5: '',
					B2_T6: '',
					B2_T7: '',
				},
				// 第二卷
				PHQ_9: {
					B2_2_T1: '',
					B2_2_T2: '',
					B2_2_T3: '',
					B2_2_T4: '',
					B2_2_T5: '',
					B2_2_T6: '',
					B2_2_T7: '',
					B2_2_T8: '',
					B2_2_T9: '',
				},
				// 第三卷
				BDRS: {
					B2_3_T1: '',
					B2_3_T2: '',
					B2_3_T3: '',
					B2_3_T4: '',
					B2_3_T5: '',
					B2_3_T6: '',
					B2_3_T7: '',
					B2_3_T8: '',
					B2_3_T9: '',
					B2_3_T10: '',
					B2_3_T11: '',
					B2_3_T12: '',
					B2_3_T13: '',
					B2_3_T14: '',
					B2_3_T15: '',
					B2_3_T16: '',
					B2_3_T17: '',
					B2_3_T18: '',
					B2_3_T19: '',
					B2_3_T20: '',
				},
				
				score: {
					page1: '',
					page2: '',
					page3: '',
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
				let page3Sum = 0;
				if(this.index == 3) {
					for (let key in this.values) {
						let index = key.split('value')[1];
						if(index >= 18 && index <= 38) {
							if(this.values[key]) {
								page3Sum += Number(this.values[key]);
								if(index == 18) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T1  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T1  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T1  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T1  = 'D';
										break;
									}
								}
								if(index == 19) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T2  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T2  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T2  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T2  = 'D';
										break;
									}
								}
								if(index == 20) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T3  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T3  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T3  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T3  = 'D';
										break;
									}
								}
								if(index == 21) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T4  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T4  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T4  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T4  = 'D';
										break;
									}
								}
								if(index == 22) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T5  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T5  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T5  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T5  = 'D';
										break;
									}
								}
								if(index == 23) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T6  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T6  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T6  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T6  = 'D';
										break;
									}
								}
								if(index == 24) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T7  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T7  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T7  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T7  = 'D';
										break;
									}
								}
								if(index == 25) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T8  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T8  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T8  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T8  = 'D';
										break;
									}
								}
								if(index == 26) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T9  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T9  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T9  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T9  = 'D';
										break;
									}
								}
								
								if(index == 27) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T10  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T10  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T10  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T10  = 'D';
										break;
									}
								}
								if(index == 28) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T11  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T11  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T11  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T11  = 'D';
										break;
									}
								}
								if(index == 29) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T12  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T12  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T12  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T12  = 'D';
										break;
									}
								}
								if(index == 30) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T13  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T13  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T13  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T13  = 'D';
										break;
									}
								}
								if(index == 31) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T14  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T14  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T14  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T14  = 'D';
										break;
									}
								}
								if(index == 32) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T15  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T15  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T15  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T15  = 'D';
										break;
									}
								}
								if(index == 33) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T16  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T16  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T16  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T16  = 'D';
										break;
									}
								}
								if(index == 34) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T17  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T17  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T17  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T17  = 'D';
										break;
									}
								}
								if(index == 35) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T18  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T18  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T18  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T18  = 'D';
										break;
									}
								}
								if(index == 36) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T19  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T19  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T19  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T19  = 'D';
										break;
									}
								}
								if(index == 37) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T20  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T20  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T20  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T20  = 'D';
										break;
									}
								}
								if(index == 38) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.BDRS.B2_3_T21  = 'A';
										break;
										case 1:
										this.BDRS.B2_3_T21  = 'B';
										break;
										case 2:
										this.BDRS.B2_3_T21  = 'C';
										break;
										case 3:
										this.BDRS.B2_3_T21  = 'D';
										break;
									}
								}
								
							}
						}
					}
					this.score.page3 = page3Sum;
				}
				
				let status = null;
				for (let key in this.values) {
					if(this.values[key] == '' || this.values[key] == null) {
						status = true
					}
				    // console.log(key + ": " + this.values[key]);
				}
				if(status == true) {
					this.$refs.uToast.show({
						title: '请完善选项！',
						type: 'error',
					})
					return
				}
				let scoreType = {
					GAD_7: this.GAD_7,
					PHQ_9: this.PHQ_9,
					BDRS: this.BDRS
				}
				this.$emit('pageEvent', {pageIndex: '25', score: this.score, scoreType: scoreType})
			},
			nextPage() {
				if(this.index >= 3) {
					this.index = 3
					return
				}
				let status = null;
				let status2 = null;
				let status3 = null;
				
				for (let key in this.values) {
					let index = key.split('value')[1];
					console.log(index,key, this.values[key]);
					if(index >= 1 && index <= 7) {
						if(this.values[key] == '' || this.values[key] == null) {
							status = true
						}
					}
					if(index >= 8 && index <= 16) {
						if(this.values[key] == '' || this.values[key] == null) {
							status2 = true
						}
					}
					if(index >= 18 && index <= 38) {
						if(this.values[key] == '' || this.values[key] == null) {
							status3 = true
						}
					}
				}
				if(this.index == 1 && status == true) {
					this.$refs.uToast.show({
						title: '请完善选项！',
						type: 'error',
					})
					return
				}
				if(this.index == 2 && status2 == true) {
					this.$refs.uToast.show({
						title: '请完善选项！',
						type: 'error',
					})
					return
				}
				if(this.index == 3 && status3 == true) {
					this.$refs.uToast.show({
						title: '请完善选项！',
						type: 'error',
					})
					return
				}
				let page1Sum = 0;
				let page2Sum = 0;
				let page3Sum = 0;
				
				if(this.index == 1) {
					for (let key in this.values) {
						let index = key.split('value')[1];
						if(index >= 1 && index <= 7) {
							if(this.values[key]) {
								page1Sum += Number(this.values[key]);
								if(index == 1) {
									switch(Number(this.values[key]))
									{
										case 0:
										this.GAD_7.B2_T1  = 'A';
										break;
										case 1:
										this.GAD_7.B2_T1  = 'B';
										break;
										case 2:
										this.GAD_7.B2_T1  = 'C';
										break;
										case 3:
										this.GAD_7.B2_T1  = 'D';
										break;
									}
								}
								if(index == 2) {
									// this.GAD_7.B2_T2 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.GAD_7.B2_T2  = 'A';
										break;
										case 1:
										this.GAD_7.B2_T2  = 'B';
										break;
										case 2:
										this.GAD_7.B2_T2  = 'C';
										break;
										case 3:
										this.GAD_7.B2_T2  = 'D';
										break;
									}
								}
								if(index == 3) {
									// this.GAD_7.B2_T3 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.GAD_7.B2_T3  = 'A';
										break;
										case 1:
										this.GAD_7.B2_T3  = 'B';
										break;
										case 2:
										this.GAD_7.B2_T3  = 'C';
										break;
										case 3:
										this.GAD_7.B2_T3  = 'D';
										break;
									}
								}
								if(index == 4) {
									// this.GAD_7.B2_T4 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.GAD_7.B2_T4  = 'A';
										break;
										case 1:
										this.GAD_7.B2_T4  = 'B';
										break;
										case 2:
										this.GAD_7.B2_T4  = 'C';
										break;
										case 3:
										this.GAD_7.B2_T4  = 'D';
										break;
									}
								}
								if(index == 5) {
									// this.GAD_7.B2_T5 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.GAD_7.B2_T5  = 'A';
										break;
										case 1:
										this.GAD_7.B2_T5  = 'B';
										break;
										case 2:
										this.GAD_7.B2_T5  = 'C';
										break;
										case 3:
										this.GAD_7.B2_T5  = 'D';
										break;
									}
								}
								if(index == 6) {
									// this.GAD_7.B2_T6 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.GAD_7.B2_T6  = 'A';
										break;
										case 1:
										this.GAD_7.B2_T6  = 'B';
										break;
										case 2:
										this.GAD_7.B2_T6  = 'C';
										break;
										case 3:
										this.GAD_7.B2_T6  = 'D';
										break;
									}
								}
								if(index == 7) {
									// this.GAD_7.B2_T7 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.GAD_7.B2_T7  = 'A';
										break;
										case 1:
										this.GAD_7.B2_T7  = 'B';
										break;
										case 2:
										this.GAD_7.B2_T7  = 'C';
										break;
										case 3:
										this.GAD_7.B2_T7  = 'D';
										break;
									}
								}
							}
						}
					}
					
					this.score.page1 = page1Sum;
				}
				if(this.index == 2) {
					for (let key in this.values) {
						let index = key.split('value')[1];
						if(index >= 8 && index <= 16) {
							if(this.values[key]) {
								page2Sum += Number(this.values[key]);
								
								if(index == 8) {
									// this.PHQ_9.B2_2_T1 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T1  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T1  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T1  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T1  = 'D';
										break;
									}
								}
								if(index == 9) {
									// this.PHQ_9.B2_2_T2 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T2  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T2  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T2  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T2  = 'D';
										break;
									}
								}
								if(index == 10) {
									// this.PHQ_9.B2_2_T3 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T3  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T3  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T3  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T3  = 'D';
										break;
									}
								}
								if(index == 11) {
									// this.PHQ_9.B2_2_T4 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T4  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T4  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T4  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T4  = 'D';
										break;
									}
								}
								if(index == 12) {
									// this.PHQ_9.B2_2_T5 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T5  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T5  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T5  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T5  = 'D';
										break;
									}
								}
								if(index == 13) {
									// this.PHQ_9.B2_2_T6 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T6  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T6  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T6  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T6  = 'D';
										break;
									}
								}
								if(index == 14) {
									// this.PHQ_9.B2_2_T7 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T7  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T7  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T7  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T7  = 'D';
										break;
									}
								}
								if(index == 15) {
									// this.PHQ_9.B2_2_T8 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T8  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T8  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T8  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T8  = 'D';
										break;
									}
								}
								if(index == 16) {
									// this.PHQ_9.B2_2_T9 = Number(this.values[key])
									switch(Number(this.values[key]))
									{
										case 0:
										this.PHQ_9.B2_2_T9  = 'A';
										break;
										case 1:
										this.PHQ_9.B2_2_T9  = 'B';
										break;
										case 2:
										this.PHQ_9.B2_2_T9  = 'C';
										break;
										case 3:
										this.PHQ_9.B2_2_T9  = 'D';
										break;
									}
								}
							}
						}
					}
					this.score.page2 = page2Sum;
				}

				this.index += 1;
				
				this.$nextTick(() => {
					uni.pageScrollTo({
						scrollTop: 0,//滚动到页面的目标位置
						duration: 300
					});
				})
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