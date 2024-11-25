<template>
  <view class="index-wrap">
    <!-- 选择伙伴 -->
    <view class="privacy" v-if="step == 'b'">
      <view class="privacy-wrap">
        <view style="padding: 20px; font-size: 16px">选择旅行伙伴</view>
        <view class="privacy-wrap-checked">
          <view
            class="checked-image"
            v-for="(item, index) in guidAPeops"
            :key="index"
            :class="[item.index == indexsed ? 'acted' : '']"
            @click="indexed(item)"
          >
            <u-image height="150px" :src="item.url"></u-image>
          </view>
        </view>
        <view class="nextBtn">
          <u-button
            :custom-style="btnstyle"
            @click="nextc"
            :ripple="true"
            size="medium"
          >
            下一步
          </u-button>
        </view>
      </view>
    </view>

    <!-- 隐私政策-->
    <view class="privacy" v-if="step == 'c'">
      <view class="privacy-wrap">
        <view style="font-size: 24px; text-align: center; margin-top: 25px"
          >测评声明</view
        >

        <view style="padding: 0 23px; margin-top: 42px">
          <view style="margin-top: 11px; font-size: 16px"
            >1.本次测试共包含4份科学性的量表问卷以及几项相应的游戏化测评项目。</view
          >
          <view style="margin-top: 11px; font-size: 16px"
            >2.测评过程中需全程开启摄像头和麦克风，以方便我们获取您的情绪及面部数据。摄像头不可自行关闭，为保证测评结果的准确性，请注意正对摄像头，测评过程中请勿离开摄像区域。</view
          >
          <view style="margin-top: 11px; font-size: 16px"
            >3.所有测试项目将用于最终生成您的专属心理测评报告。</view
          >
        </view>

        <view style="padding: 0 23px; margin-top: 30%">
          <u-checkbox
            active-color="#07c160"
            @change="checkboxChange"
            v-model="readChecked"
            :disabled="!readChecked"
            :label-disabled="true"
            shape="square"
          >
            <view @click="readYs">
              <text
                style="
                  font-size: 14px;
                  color: #07c160;
                  text-decoration: underline;
                "
                >《心理测评隐私政策》</text
              ></view
            >
          </u-checkbox>
          <view
            style="
              display: block;
              color: #dc0000;
              padding-left: 25px;
              font-size: 12px;
              display: inline-block;
            "
            >请阅读并勾选《心理测评隐私政策》</view
          >
        </view>
        <view class="readtrue">
          <u-button
            :custom-style="{
              background: '#0cb1bd',
              color: '#fff',
              width: '268px',
              height: '66px',
              fontSize: '16px',
            }"
            :disabled="!readChecked"
            :ripple="true"
            @click="next"
          >
            我已悉知，开始测评
          </u-button>
        </view>
      </view>

      <!-- 协议内容 -->
      <view class="privacy-content" v-if="priacyContent">
        <view style="padding: 23px">
          <view class="font16">情感识别科技有限公司心理健康评测软件</view>
          <view class="font14" style="margin: 7px 0"
            >情感识别科技有限公司心理健康评测软件隐私政策</view
          >
          <view class="font14">更新日期：2024年1月29日</view>
          <view class="font14">生效日期：2024年1月29日</view>
          <view class="font15" style="margin-top: 22px">
            <view style="margin-bottom: 10px"
              >本《情感识别科技有限公司心理健康评测软件隐私政策》（“《隐私政策》”）适用于安徽情感识别科技有限公司（“情感识别”或“我们”）发布的“情感识别科技有限公司心理健康评测软件”应用程序（“情感识别科技有限公司心理健康评测软件”）以及与之相关的服务（合称“情感识别科技有限公司心理健康评测软件服务”）。</view
            >

            <view style="margin-bottom: 10px"
              >本隐私政策旨在向您解释，在您访问或使用我们的情感识别科技有限公司心理健康评测软件服务期间，我们将会如何收集、存储、使用、处理、披露、共享、传输和保护您的个人信息及数据（以下称“个人信息”）以及与之有关的事项。</view
            >

            <view style="margin-bottom: 10px">
              情感识别深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，情感识别承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。请在使用我们的情感识别科技有限公司心理健康评测软件服务前，仔细阅读并了解本《隐私政策》，并确认了解我们对您个人信息的处理规则。
              使用我们的服务涉及收集和处理您的个人信息，我们将严格遵守本隐私政策和/或我们的使用条款来使用您的个人信息。请在访问和使用我们的服务前，仔细阅读并充分理解本隐私政策。未成年人请在法定监护人陪同下仔细阅读以充分理解和决定是否接受本隐私政策。
              在本隐私政策中，安徽情感识别科技有限公司是我们从您使用服务中收集或接收到的任何个人信息的数据控制人。
            </view>

            <view class="font16">定义和解释</view>
            <view style="margin-bottom: 10px"
              >“个人信息”指以电子或者其他方式记录的能够单独或者与其他信息结合识别自然人个人身份的各种信息。</view
            >

            <view style="margin-bottom: 10px"
              >“个人敏感信息”指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇的个人信息。个人敏感信息包括但不限于身份证件号码、个人生物识别信息、银行账号、通信内容、健康生理信息。</view
            >

            <view style="margin-bottom: 10px"
              >“去标识化”指通过对个人信息的技术处理，使其在不借助额外信息的情况下，无法识别个人信息主体的过程。</view
            >

            <view style="margin-bottom: 10px"
              >“匿名化”指通过对个人信息的技术处理，使得个人信息主体无法被识别，且处理后的信息不能被复原的过程。</view
            >

            <view class="font16">我们如何收集和使用您的个人信息</view>
            <view style="margin-bottom: 10px">
              为向您提供情感识别科技有限公司心理健康评测软件服务，我们将在法律允许的范围内收集您的个人信息。如果您不提供相关个人信息，可能无法享受我们提供的情感识别科技有限公司心理健康评测软件服务或其某些功能，或者无法达到我们提供的情感识别科技有限公司心理健康评测软件服务的预期效果。</view
            >

            <view style="margin-bottom: 10px">
              我们将遵循合法、正当、必要的原则，仅将您主动提供的个人信息和我们主动收集的个人信息用于本《隐私政策》所限定的使用用途并与实现情感识别科技有限公司心理健康评测软件服务的业务功能有直接关联，以为您提供情感识别科技有限公司心理健康评测软件服务，并用于身份验证、安全防范、防止欺诈和滥用、响应法律请求、存档备份、改善和加强我们的情感识别科技有限公司心理健康评测软件服务、排除故障和防止错误、进行数据分析和测试、客户的安全服务以提高情感识别科技有限公司心理健康评测软件服务的安全性。</view
            >
            <view style="margin-bottom: 10px">
              具体而言，在您访问、使用我们的情感识别科技有限公司心理健康评测软件服务和/或我们向您提供情感识别科技有限公司心理健康评测软件服务的过程中，我们将在下述情形中收集和使用以下各类信息。
            </view>
            <view class="font16">登录</view>
            <view style="margin-bottom: 10px">
              如果您选择使用情感识别科技有限公司心理健康评测软件服务的功能，为便于使用我们为您提供的完整的情感识别科技有限公司心理健康评测软件服务，您需要注册一个账号以访问、登陆并使用我们的情感识别科技有限公司心理健康评测软件服务。
            </view>
            <view style="margin-bottom: 10px">
              您在使用过程中或之后，您需进入情感识别科技有限公司心理健康评测软件提交以下额外个人信息，包括：昵称、年龄、性别、学历，以完善您的个人资料，同时也有助于给您提供更精确的分析和测量结果和更好的服务。上述填写的信息都会被保存在您的情感识别科技有限公司心理健康评测软件本地文件夹里。上述信息属于个人敏感信息。收集该等信息是情感识别科技有限公司心理健康评测软件服务为您提供精确测量所必需，如果不提供该等信息，您将无法使用情感识别科技有限公司心理健康评测软件服务。
            </view>
            <view class="font16">情感健康分析</view>
            <view style="margin-bottom: 10px">
              当您使用情感识别科技有限公司心理健康评测软件服务情感和健康分析功能时，您需通过支持的移动设备视频摄像头/相机拍摄您的面部图像，并抓取您的面部信息。您的面部图像和面部信息将通过情感识别科技有限公司心理健康评测软件传送至本地文件夹，从而为您提供下述测量结果，包括性格指数、压力指数和综合健康评分（“测量结果”）。
            </view>
            <view style="margin-bottom: 10px"
              >您使用情感识别科技有限公司心理健康评测软件服务相关的情感和健康分析功能时，情感识别科技有限公司心理健康评测软件会请求获取您移动设备的视频摄像头/相机权限，以提供情感和健康分析服务。您可在设备设置中查看上述权限的状态，并可自行决定该权限随时的开启或关闭。如果您选择关闭您移动设备的视频摄像头/相机权限，您将无法使用情感识别科技有限公司心理健康评测软件服务。
            </view>
            <view style="margin-bottom: 10px">
              在上述过程中，您需提供且我们会收集您的面部图像和面部信息—该等信息属于个人敏感信息，收集上述信息是向您提供服务尤其是情感识别科技有限公司心理健康评测软件的核心检测、分析和记录功能所必需，也有助于我们提供更精确的测量结果和提高分析能力。如您不提供上述信息，我们将无法向您提供情感识别科技有限公司心理健康评测软件的核心测试和分析功能和服务。
            </view>

            <view style="margin-bottom: 10px">
              当您使用情感识别科技有限公司心理健康评测软件服务面部检测和相关的情感和健康分析功能后，您的个人测量结果，包括性格指数、压力指数和综合健康评分将记录在本地文件夹中。该等信息属于个人敏感信息，且该等信息系您使用情感识别科技有限公司心理健康评测软件分析功能的必要结果。
            </view>
            <view class="font16"> 意见反馈和服务支持 </view>

            <view style="margin-bottom: 10px">
              当您使用情感识别科技有限公司心理健康评测软件的意见反馈功能时，我们会收集您向我们的服务支持团队提供的您对服务的意见、申诉或建议以及您的相关账号信息。
            </view>

            <view class="font16"> 事先征得授权同意的例外 </view>
            <view style="margin-bottom: 10px">
              根据相关法律法规及国家标准，在以下情形中，情感识别科技有限公司心理健康评测软件服务会依法收集并使用您的个人信息无需征得您的同意：
            </view>

            <view style="margin-bottom: 10px">
              在公共主管机关为行使其权力或职责而要求时，包括为国家安全、国防安全、公共安全、公共卫生健康和重大公共利益相关的；<br />
              与犯罪刑事侦查、起诉、审判及判决执行有关的；<br />
              出于维护您或其他个人的生命、财产等重大合法权益但又难以得到相关主体同意的；<br />
              收集的个人信息系由您自行向公众公开的；<br />
              从合法披露信息中收集的您的个人信息，如合法的新闻报道、政府信息披露等；<br />
              根据您的要求为签署合同所必需的；<br />
              用于维护所提供的情感识别科技有限公司心理健康评测软件服务的安全稳定运行所必需的，例如发现、处置情感识别科技有限公司心理健康评测软件服务的故障；<br />
              为合法新闻报道所要求的；<br />
              学术研究机构基于公共利益开展统计或学术研究所必要的，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；<br />
              和法律法规规定的其他情形。<br />
              <view class="font16">补充说明</view><br />
              当我们要将信息用于本《隐私政策》未载明的其它用途时，会事先征求您的同意。<br />
              当我们要将基于特定目的收集而来的信息用于其他目的时，会事先征求您的同意。<br />
              若我们从第三方处间接获取您的信息的，我们会在收集前明确以书面形式要求该第三方在已依法取得您同意后收集个人信息，并向您告知共享的信息内容，且涉及敏感信息的在提供给我们使用前需经过您的明确确认，要求第三方对个人信息来源的合法性和合规性作出承诺。<br />
              我们如何共享、转让和披露您的个人信息
            </view>

            <view style="margin-bottom: 10px">
              <view class="font16">共享</view><br />
              未经您的同意或授权，我们不会向第三方共享、转让或披露您的个人信息。如需要对外共享、转让或披露您的个人信息，我们会向您告知共享、转让或披露个人信息的目的、数据接收方的类型，并征得您的授权同意。涉及敏感信息的，我们还会告知敏感信息的类型、数据接收方的身份和数据安全能力，并征得您的明示授权同意。
            </view>

            <view style="margin-bottom: 10px">
              转让 我们不会将您的个人信息转让给任何第三方，但以下情况除外：
            </view>

            <view style="margin-bottom: 10px">
              在已经获得您的明确授权或同意后；<br />
              以满足届时适用法律规定为前提，如果我们或我们的关联公司涉及合并、分立、清算、资产或业务的收购或出售等交易，您的个人信息有可能作为此类交易的一部分而被转移，我们将确保该等信息在转移时的机密性，并尽最大可能确保新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意；或<br />
              满足法律法规、法律程序的要求或强制性的政府要求或司法裁定。<br />
              <view class="font16">公开披露</view><br />
              我们仅会在以下情况下，公开披露您的个人信息：
            </view>

            <view style="margin-bottom: 2px">
              在已经获得您的明确授权或同意后；或<br />
              基于法律法规、法律程序、诉讼或政府主管部门强制性要求下。<br />
              共享、转让、披露个人信息时事先征得授权同意的例外<br />
              在以下情形中，共享、转让、公开披露个人信息无需事先征得您的授权同意：<br />
            </view>

            <view style="margin-bottom: 10px">
              与履行法律规定的义务相关的；<br />
              与国家安全、国防安全直接相关的；<br />
              与公共安全、公共卫生、重大公共利益直接相关的；<br />
              与刑事侦查、起诉、审判和判决执行等直接相关的；<br />
              出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br />
              个人信息主体自行向社会公众公开的个人信息；<br />
              从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。<br />
              请您知悉，根据法律规定，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、转让及公开披露行为，对此类数据的保存及处理将无需另行向您通知并征得您的同意。<br />
            </view>

            <view style="margin-bottom: 10px">
              <view class="font16">我们如何存储和保护您的个人信息</view><br />
              我们如何存储您的个人信息<br />
              我们将在为本《隐私政策》所列目的合理必需的范围内或为遵守与强制保存特定种类个人信息的适用法律及法规的范围内存储您的个人信息。<br />
            </view>

            <view style="margin-bottom: 10px">
              存储信息的地点<br />
              我们根据本《隐私政策》收集的有关您的信息，将经过匿名化处理后加密存储于本地文件夹—我们可能通过受信任的第三方服务提供商储存该等信息。<br />
            </view>

            <view style="margin-bottom: 10px">
              存储信息的时间<br />
              除法律规定的强制性要求外，我们将在您使用情感识别科技有限公司心理健康评测软件服务的期间，为实现使用情感识别科技有限公司心理健康评测软件服务目的所必需的最短时间及相关行为的诉讼时效届满前保存我们根据本《隐私政策》收集的有关您的信息。<br />
            </view>

            <view style="margin-bottom: 10px">
              在超过上述期限和您主动注销您的账号后或主动删除上述信息后，我们将根据适用法律法规的要求保存最终用户的信息，并尽快使其匿名或删除您的个人信息，除非可适用的法律要求或允许在更长的期间内保留这些信息。
            </view>

            <view style="margin-bottom: 10px">
              <view class="font16">信息出境</view><br />
              如您的个人信息需被传输至境外以提供服务，我们将另行寻求您的同意并要求相关接收方采用符合我们的指示和本隐私政策的相关的保密及安全措施处理个人信息。此种情况下，我们会采取有效措施保护您的信息安全，例如，在跨境数据转移之前实施数据去标识化或匿名化等安全措施，或通过协议、核查等措施要求境外机构为您的信息保密。<br />
            </view>

            <view style="margin-bottom: 10px">
              <view class="font16">我们如何保护您的个人信息</view><br />
              我们采取符合业界标准的安全防护措施保护您的个人信息，使其免受未经授权的访问、公开披露、使用、修改、损坏或丢失，例如：
            </view>

            <view style="margin-bottom: 10px">
              我们采取了符合行业标准的物理、电子及程序保障措施；<br />
              我们采用加密技术（如SSL）以加密方式传输和保存您的个人信息；<br />
              收集个人信息后，我们会进行必要的标识化处理，将可用于恢复识别个人的信息与去标识化后的信息分开存储并加强访问和使用的权限管理；<br />
              对个人敏感信息我们会对该等信息采用去标识化或匿名化处理；<br />
              我们会对员工进行数据安全的意识培养和安全能力的培训和考核，加强员工对于保护个人信息重要性的认识。我们将对您个人信息的访问严格限制在需要知悉的范围内；<br />
              我们会制定网络安全事件应急预案，及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险，在发生危害网络安全的事件时，我们会立即启动应急预案，采取相应的补救措施，并按照规定向有关主管部门报告；<br />
              在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向最终用户告知安全事件的基本情况和可能的影响、我们已采取或将要采取的处理措施、最终用户可自主防范和降低的风险的建议、对最终用户的补救措施等。我们将及时将事件相关情况以站内通知、短信通知、电话或邮件等最终用户预留的联系方式告知最终用户；同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。<br />
              请注意，尽管我们竭尽所能，由于技术的限制和飞速发展以及可能存在的各种恶意攻击手段，没有任何一种传输或存储信息的方式是完全安全的，因此我们不保证或担保也不可能始终保证信息的百分之百安全。请您了解，您使用我们的情感识别科技有限公司心理健康评测软件服务时所用的系统和通讯网络，有可能在我们控制之外的其他环节而出现安全问题。<br />
            </view>

            <view style="margin-bottom: 10px">
              如果我们处理用户信息的行为违反法律法规；<br />
              如果我们收集、使用您的用户信息，却未征得您的同意；<br />
              如果我们处理用户信息的行为违反了与您的约定；<br />
              发现我们处理的关于您的个人信息有错误时；<br />
              您有正当理由需要更正或删除您的个人信息时；<br />
              如果你不再使用我们的产品或服务，或您注销了账号；<br />
              如果我们不再为您提供产品或服务。<br />
              我们经过线下的核实，告知相应风险后，为您进行删除操作。<br />
            </view>

            <view style="margin-bottom: 10px"
              >如我们决定响应您的删除请求，我们还将同时通知从我们获得你的用户信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。请注意，如果您撤销同意我们使用、收集或要求我们删除您的必要个人信息后，您将不能使用我们的服务。当您从我们的服务中删除信息后，我们可能不会立即在备份系统中删除相应的信息，但会在备份更新时删除这些信息。我们也可能因适用法律而被要求保留某些个人信息。
            </view>

            <view style="margin-bottom: 10px">
              <view class="font16">回复您的请求</view><br />
              受限于适用法律，您可联系公司提交您的请求。<br />
            </view>

            <view style="margin-bottom: 10px">
              为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。在遵守适用法律的情形下，我们对于重复的请求、要求过多技术手段的请求（如开发新系统或对现有惯例做出重大变更的）、对他人的合法权益带来风险的请求、或我们根据适用法律可拒绝的请求，保留收取费用的权利。
            </view>
            <view style="margin-bottom: 10px">
              在特定情形下，我们可能无法回复您的请求。该等情形可能包括以下：
            </view>

            <view style="margin-bottom: 10px">
              与国家安全和国防安全相关；<br />
              与公共安全、公共健康及重大公共利益相关；<br />
              与犯罪侦查、起诉和审判相关；<br />
              有充分证据证明您缺乏善意或滥用权利；<br />
              回复将导致对您或其他个人及组织的合法权益造成严重损害。<br />
              对未成年人的隐私政策<br />
              我们的服务并非针对未成年人所提供。未获父母/监护人（为其自身并代表您）对本政策的同意，未成年人不得使用我们的服务。<br />
            </view>
          </view>
          <view class="agreen">
            <u-button
              :custom-style="btnstyle"
              @click="agreen"
              :ripple="true"
              size="medium"
            >
              同意
            </u-button>
          </view>

          <!-- <view class="read-true" @click="agreen">同意</view> -->
        </view>
      </view>
    </view>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
const pep = require("../../../static/uview/example/pep.png");
const pep2 = require("../../../static/uview/example/pep2.png");
const pep3 = require("../../../static/uview/example/pep3.png");
const pep4 = require("../../../static/uview/example/pep4.png");
export default {
  data() {
    return {
      step: "b",
      btnstyle: {
        color: "#fff",
        width: "200px",
        background: "#0cb1bd",
      },
      itemed: "",
      indexsed: 100,
      readChecked: false,
      priacyContent: false, //协议内容
      // src: "https://dfs.affectai.cn/affect-material/images/page1/title.png",
      list: [
        {
          name: "《心理测评隐私政策》",
          checked: false,
          disabled: false,
        },
      ],
      guidAPeops: [
        {
          index: 0,
          url: pep,
        },
        {
          index: 1,
          url: pep2,
        },
        {
          index: 2,
          url: pep3,
        },
        {
          index: 3,
          url: pep4,
        },
      ],
      innerAudioContext: null,
    };
  },
  beforeDestroy() {
    this.innerAudioContext && this.innerAudioContext.destroy();
  },
  mounted() {
    // todo 音频
    this.innerAudioContext = uni.createInnerAudioContext({
      useWebAudioImplement: false,
    });
    // 鼠标音效
    this.innerAudioContext.src =
      "https://dfs.affectai.cn/affect-material/images/audio/mouse_sound/a2.mp3";
  },
  methods: {
    nexta() {
      this.step = "b";
    },
    checkboxChange(ev) {
      this.readChecked = false;
    },
    indexed(item) {
      this.indexsed = item.index;
      this.itemed = item.url;
      this.$emit("gloAvtor", item.url);
    },
    readYs() {
      this.priacyContent = true;
    },
    checkboxGroupChange() {},
    agreen() {
      setTimeout(() => {
        this.priacyContent = false;
        this.readChecked = true;
      }, 200);
    },
    nextc() {
      if (!this.itemed) {
        return this.$refs.uToast.show({
          title: "请选择旅行伙伴~",
          type: "warning",
        });
      }
      setTimeout(() => {
        this.step = "c";
      }, 500);
    },
    next() {
      if (!this.readChecked) {
        return this.$refs.uToast.show({
          title: "请阅读并勾选《心理测评隐私政策》",
          type: "error",
        });
      }
      setTimeout(() => {
        this.innerAudioContext.play(); // 播放
        this.$emit("pageEvent", { pageIndex: 2 });
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.index-wrap {
  min-height: 100vh;
  background-image: url("https://dfs.affectai.cn/affect-material/images/page1/bg1.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  .privacy {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page1/bg1.png");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 600;

    .privacy-wrap {
      width: 366px;
      height: 90vh;
      margin: auto;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 601;
      border-radius: 10px;

      .privacy-wrap-checked {
        display: flex;
        padding: 10px 30px;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        .acted {
          background: #0cb1bd;
          padding: 4px !important;
        }
        .checked-image {
          width: 50%;
          padding: 10px;
          border-radius: 8px;
        }
      }
      .nextBtn {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .readtrue {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }

    .privacy-content {
      width: 366px;
      height: 90vh;
      overflow-y: scroll;
      margin: auto;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 603;
      border-radius: 10px;

      .font16 {
        font-size: 19px;
        color: #121212;
        font-family: Microsoft YaHei;
        font-weight: 500;
      }
      .font15 {
        font-size: 16px;
        color: #312f2f;
        font-family: fantasy;
        font-weight: 100;
      }
      .font14 {
        font-size: 14px;
        color: #464747;
        font-family: Arial;
      }
      .agreen {
        width: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
  }
}
</style>
